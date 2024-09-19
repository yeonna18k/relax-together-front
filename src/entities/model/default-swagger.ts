/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://fe-adv-project-together-dallaem.vercel.app';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      key => 'undefined' !== typeof query[key],
    );
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title [KDT 단기 심화] 같이달램 API
 * @version 1.0.0
 * @baseUrl https://fe-adv-project-together-dallaem.vercel.app
 *
 * API for [KDT 단기 심화] 같이달램
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  teamId = {
    /**
     * @description 새로운 사용자 계정을 생성합니다
     *
     * @tags Auths
     * @name SignupCreate
     * @summary 사용자 회원가입
     * @request POST:/{teamId}/auths/signup
     */
    signupCreate: (
      teamId: string,
      data: {
        /** 사용자 이메일 */
        email?: string;
        /** 사용자 비밀번호 */
        password?: string;
        /** 사용자 이름 */
        name?: string;
        /** 회사명 */
        companyName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "사용자 생성 성공" */
          message?: string;
        },
        | {
            /** @example "VALIDATION_ERROR" */
            code?: string;
            /** @example "email" */
            parameter?: string;
            /** @example "유효한 이메일 주소를 입력하세요" */
            message?: string;
          }
        | {
            /** @example "EMAIL_EXISTS" */
            code?: string;
            /** @example "이미 사용 중인 이메일입니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/auths/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 사용자 인증을 하고 토큰을 반환하거나 세션을 설정합니다.
     *
     * @tags Auths
     * @name SigninCreate
     * @summary 사용자 로그인
     * @request POST:/{teamId}/auths/signin
     */
    signinCreate: (
      teamId: string,
      data: {
        /** 사용자 이메일 */
        email?: string;
        /** 사용자 비밀번호 */
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        | {
            /** JWT 토큰 */
            token?: string;
          }
        | {
            /** @example "로그인 성공" */
            message?: string;
          },
        {
          /** @example "INVALID_CREDENTIALS" */
          code?: string;
          /** @example "잘못된 이메일 또는 비밀번호입니다" */
          message?: string;
        }
      >({
        path: `/${teamId}/auths/signin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 사용자를 로그아웃합니다
     *
     * @tags Auths
     * @name SignoutCreate
     * @summary 사용자 로그아웃
     * @request POST:/{teamId}/auths/signout
     */
    signoutCreate: (teamId: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "로그아웃 성공" */
          message?: string;
        },
        any
      >({
        path: `/${teamId}/auths/signout`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 사용자의 회원 정보를 반환합니다.
     *
     * @tags Auths
     * @name UserDetail
     * @summary 회원 정보 확인
     * @request GET:/{teamId}/auths/user
     * @secure
     */
    userDetail: (teamId: string, params: RequestParams = {}) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          email?: string;
          name?: string;
          companyName?: string;
          image?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
        },
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "인증이 필요합니다" */
            message?: string;
          }
        | {
            /** @example "USER_NOT_FOUND" */
            code?: string;
            /** @example "사용자를 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/auths/user`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 사용자의 회원 정보를 수정합니다.
     *
     * @tags Auths
     * @name UserUpdate
     * @summary 회원 정보 수정
     * @request PUT:/{teamId}/auths/user
     * @secure
     */
    userUpdate: (
      teamId: string,
      data: {
        /** 회사명 */
        companyName?: string;
        /**
         * 사용자 프로필 이미지
         * @format binary
         */
        image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id?: number;
          email?: string;
          name?: string;
          companyName?: string;
          image?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
        },
        | {
            /** @example "VALIDATION_ERROR" */
            code?: string;
            /** @example "email" */
            parameter?: string;
            /** @example "유효한 입력 값을 제공해야 합니다" */
            message?: string;
          }
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "인증이 필요합니다" */
            message?: string;
          }
        | {
            /** @example "USER_NOT_FOUND" */
            code?: string;
            /** @example "사용자를 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/auths/user`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 모임의 종류, 위치, 날짜 등 다양한 조건으로 모임 목록을 조회합니다
     *
     * @tags Gatherings
     * @name GatheringsDetail
     * @summary 모임 목록 조회
     * @request GET:/{teamId}/gatherings
     */
    gatheringsDetail: (
      teamId: string,
      query?: {
        /**
         * 쉼표로 구분된 모임 ID 목록으로 필터링
         * @example "1,2,3"
         */
        id?: string;
        /** 모임 종류로 필터링 */
        type?: 'DALLAEMFIT' | 'OFFICE_STRETCHING' | 'MINDFULNESS' | 'WORKATION';
        /** 모임 위치로 필터링 */
        location?: '건대입구' | '을지로3가' | '신림' | '홍대입구';
        /**
         * 모임 날짜로 필터링 (YYYY-MM-DD 형식)
         * @format date
         */
        date?: string;
        /** 모임 생성자로 필터링 */
        createdBy?: number;
        /** 정렬 기준 */
        sortBy?: 'dateTime' | 'registrationEnd' | 'participantCount';
        /** 정렬 순서 (asc 또는 desc) */
        sortOrder?: 'asc' | 'desc';
        /** 한 번에 조회할 모임 수 (최소 1) */
        limit?: number;
        /** 조회 시작 위치 (최소 0) */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          type?:
            | 'DALLAEMFIT'
            | 'OFFICE_STRETCHING'
            | 'MINDFULNESS'
            | 'WORKATION';
          name?: string;
          /** @format date-time */
          dateTime?: string;
          /** @format date-time */
          registrationEnd?: string;
          location?: string;
          participantCount?: number;
          capacity?: number;
          image?: string;
          createdBy?: number;
          /** @format date-time */
          canceledAt?: string;
        }[],
        {
          /** @example "VALIDATION_ERROR" */
          code?: string;
          /** @example "type" */
          parameter?: string;
          /** @example "유효한 모임 종류를 입력하세요" */
          message?: string;
        }
      >({
        path: `/${teamId}/gatherings`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 새로운 모임을 생성합니다
     *
     * @tags Gatherings
     * @name GatheringsCreate
     * @summary 모임 생성
     * @request POST:/{teamId}/gatherings
     * @secure
     */
    gatheringsCreate: (
      teamId: string,
      data: {
        /** 모임 장소 */
        location?: '건대입구' | '을지로3가' | '신림' | '홍대입구';
        /** 모임 서비스 종류 */
        type?: 'OFFICE_STRETCHING' | 'MINDFULNESS' | 'WORKATION';
        /** 모임 이름 */
        name?: string;
        /**
         * 모임 날짜 및 시간 (YYYY-MM-DDTHH:MM:SS)
         * @format date-time
         */
        dateTime?: string;
        /** 모집 정원 (최소 5인 이상) */
        capacity?: number;
        /**
         * 모임 이미지
         * @format binary
         */
        image?: File;
        /**
         * 모임 모집 마감 날짜 및 시간 (선택 사항, YYYY-MM-DDTHH:MM:SS)
         * @format date-time
         */
        registrationEnd?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          type?: string;
          name?: string;
          /** @format date-time */
          dateTime?: string;
          /** @format date-time */
          registrationEnd?: string;
          location?: string;
          participantCount?: number;
          capacity?: number;
          image?: string;
          createdBy?: number;
        },
        | (
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "type" */
                parameter?: string;
                /** @example "유효한 모임 종류를 입력하세요" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "name" */
                parameter?: string;
                /** @example "모임 이름은 필수 입력 항목입니다" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "dateTime" */
                parameter?: string;
                /** @example "유효한 날짜 및 시간 형식(YYYY-MM-DDTHH:MM:SS)을 입력하세요" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "capacity" */
                parameter?: string;
                /** @example "모집 정원은 최소 5인 이상이어야 합니다" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "registrationEnd" */
                parameter?: string;
                /** @example "모집 마감 날짜 및 시간은 모임 날짜 및 시간보다 이전이어야 합니다" */
                message?: string;
              }
          )
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "Authorization 헤더가 필요합니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 사용자가 참석한 모임의 목록을 조회합니다.
     *
     * @tags Gatherings
     * @name JoinedDetail
     * @summary 로그인된 사용자가 참석한 모임 목록 조회
     * @request GET:/{teamId}/gatherings/joined
     * @secure
     */
    joinedDetail: (
      teamId: string,
      query?: {
        /** 모임 이용 완료 여부로 필터링 (true일 경우 이용 완료한 모임만 조회) */
        completed?: boolean;
        /** 리뷰 작성 여부로 필터링 (true일 경우 리뷰 작성한 모임만 조회) */
        reviewed?: boolean;
        /** 조회할 모임 수 */
        limit?: number;
        /** 조회 시작 위치 */
        offset?: number;
        /**
         * 정렬 기준
         * @default "dateTime"
         */
        sortBy?: 'dateTime' | 'registrationEnd' | 'joinedAt';
        /**
         * 정렬 순서
         * @default "asc"
         */
        sortOrder?: 'asc' | 'desc';
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** 팀 ID */
          teamId?: number;
          /** 모임 ID */
          id?: number;
          /** 모임 서비스 종류 */
          type?:
            | 'DALLAEMFIT'
            | 'OFFICE_STRETCHING'
            | 'MINDFULNESS'
            | 'WORKATION';
          /** 모임 이름 */
          name?: string;
          /**
           * 모임 날짜 및 시간
           * @format date-time
           */
          dateTime?: string;
          /**
           * 모임 모집 마감 날짜 및 시간
           * @format date-time
           */
          registrationEnd?: string;
          /** 모임 장소 */
          location?: string;
          /** 현재 참여자 수 */
          participantCount?: number;
          /** 모집 정원 */
          capacity?: number;
          /** 모임 이미지 URL */
          image?: string;
          /** 모임 생성자 ID */
          createdBy?: number;
          /**
           * 모임 취소 날짜 및 시간
           * @format date-time
           */
          canceledAt?: string | null;
          /**
           * 사용자가 모임에 참석한 일자
           * @format date-time
           */
          joinedAt?: string;
          /** 모임 종료 여부 */
          isCompleted?: boolean;
          /** 리뷰 작성 여부 */
          isReviewed?: boolean;
        }[],
        | {
            /** @example "VALIDATION_ERROR" */
            code?: string;
            /** @example "limit" */
            parameter?: string;
            /** @example "limit는 최소 1이어야 합니다" */
            message?: string;
          }
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "Authorization 헤더가 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings/joined`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 모임의 상세 정보를 조회합니다
     *
     * @tags Gatherings
     * @name GatheringsDetail2
     * @summary 모임 상세 조회
     * @request GET:/{teamId}/gatherings/{id}
     * @originalName gatheringsDetail
     * @duplicate
     */
    gatheringsDetail2: (
      teamId: string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          type?: string;
          name?: string;
          /** @format date-time */
          dateTime?: string;
          /** @format date-time */
          registrationEnd?: string;
          location?: string;
          participantCount?: number;
          capacity?: number;
          image?: string;
          createdBy?: number;
          /** @format date-time */
          canceledAt?: string | null;
        },
        | {
            /** @example "VALIDATION_ERROR" */
            code?: string;
            /** @example "id" */
            parameter?: string;
            /** @example "유효한 모임 ID를 입력하세요" */
            message?: string;
          }
        | {
            /** @example "NOT_FOUND" */
            code?: string;
            /** @example "모임을 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description 특정 모임의 참가자 목록을 페이지네이션하여 조회합니다.
     *
     * @tags Gatherings
     * @name ParticipantsDetail
     * @summary 특정 모임의 참가자 목록 조회
     * @request GET:/{teamId}/gatherings/{id}/participants
     */
    participantsDetail: (
      teamId: string,
      id: number,
      query?: {
        /**
         * 페이지당 참가자 수
         * @default 5
         */
        limit?: number;
        /**
         * 페이지 오프셋
         * @default 0
         */
        offset?: number;
        /**
         * 정렬 기준
         * @default "joinedAt"
         */
        sortBy?: 'joinedAt';
        /**
         * 정렬 순서
         * @default "asc"
         */
        sortOrder?: 'asc' | 'desc';
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          teamId?: number;
          userId?: number;
          gatheringId?: number;
          /** @format date-time */
          joinedAt?: string;
          User?: {
            id?: number;
            email?: string;
            name?: string;
            companyName?: string;
            image?: string;
          };
        }[],
        | (
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "id" */
                parameter?: string;
                /** @example "유효한 모임 ID를 입력하세요" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "limit" */
                parameter?: string;
                /** @example "limit는 최소 1이어야 합니다" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "offset" */
                parameter?: string;
                /** @example "offset는 최소 0이어야 합니다" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "sortBy" */
                parameter?: string;
                /** @example "유효한 정렬 기준을 입력하세요" */
                message?: string;
              }
            | {
                /** @example "VALIDATION_ERROR" */
                code?: string;
                /** @example "sortOrder" */
                parameter?: string;
                /** @example "유효한 정렬 순서를 입력하세요" */
                message?: string;
              }
          )
        | {
            /** @example "NOT_FOUND" */
            code?: string;
            /** @example "모임을 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings/${id}/participants`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 모임을 취소합니다. 모임 생성자만 취소할 수 있습니다.
     *
     * @tags Gatherings
     * @name CancelUpdate
     * @summary 모임 취소
     * @request PUT:/{teamId}/gatherings/{id}/cancel
     * @secure
     */
    cancelUpdate: (teamId: string, id: number, params: RequestParams = {}) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          type?: string;
          name?: string;
          /** @format date-time */
          dateTime?: string;
          /** @format date-time */
          registrationEnd?: string;
          location?: string;
          participantCount?: number;
          capacity?: number;
          image?: string;
          createdBy?: number;
          /** @format date-time */
          canceledAt?: string;
        },
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "Authorization 헤더가 필요합니다" */
            message?: string;
          }
        | {
            /** @example "FORBIDDEN" */
            code?: string;
            /** @example "모임을 취소할 권한이 없습니다" */
            message?: string;
          }
        | {
            /** @example "NOT_FOUND" */
            code?: string;
            /** @example "모임을 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings/${id}/cancel`,
        method: 'PUT',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인한 사용자가 모임에 참여합니다
     *
     * @tags Gatherings
     * @name JoinCreate
     * @summary 모임 참여
     * @request POST:/{teamId}/gatherings/{id}/join
     * @secure
     */
    joinCreate: (teamId: string, id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "모임에 참여했습니다" */
          message?: string;
        },
        | (
            | {
                /** @example "GATHERING_CANCELED" */
                code?: string;
                /** @example "취소된 모임입니다" */
                message?: string;
              }
            | {
                /** @example "GATHERING_FULL" */
                code?: string;
                /** @example "모집 정원이 초과되었습니다" */
                message?: string;
              }
            | {
                /** @example "REGISTRATION_CLOSED" */
                code?: string;
                /** @example "모집이 마감된 모임입니다" */
                message?: string;
              }
            | {
                /** @example "ALREADY_JOINED" */
                code?: string;
                /** @example "이미 참여한 모임입니다" */
                message?: string;
              }
          )
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "Authorization 헤더가 필요합니다" */
            message?: string;
          }
        | {
            /** @example "NOT_FOUND" */
            code?: string;
            /** @example "모임을 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings/${id}/join`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 사용자가 모임에서 참여 취소합니다. 이미 지난 모임은 참여 취소가 불가합니다.
     *
     * @tags Gatherings
     * @name LeaveDelete
     * @summary 모임 참여 취소
     * @request DELETE:/{teamId}/gatherings/{id}/leave
     * @secure
     */
    leaveDelete: (teamId: string, id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "모임을 참여 취소했습니다" */
          message?: string;
        },
        | (
            | {
                /** @example "PAST_GATHERING" */
                code?: string;
                /** @example "이미 지난 모임입니다" */
                message?: string;
              }
            | {
                /** @example "NOT_PARTICIPANT" */
                code?: string;
                /** @example "모임에 참여하지 않았습니다" */
                message?: string;
              }
          )
        | {
            /** @example "UNAUTHORIZED" */
            code?: string;
            /** @example "Authorization 헤더가 필요합니다" */
            message?: string;
          }
        | {
            /** @example "NOT_FOUND" */
            code?: string;
            /** @example "모임을 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/gatherings/${id}/leave`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 모임에 대한 리뷰를 추가합니다. 사용자는 모임에 참석해야 하고, 모임이 종료된 상태여야 하며, 해당 모임에 대해 리뷰를 작성한 적이 없어야 합니다.
     *
     * @tags Reviews
     * @name ReviewsCreate
     * @summary 리뷰 추가
     * @request POST:/{teamId}/reviews
     * @secure
     */
    reviewsCreate: (
      teamId: string,
      data: {
        gatheringId?: number;
        /**
         * @min 1
         * @max 5
         */
        score?: number;
        comment?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          userId?: number;
          gatheringId?: number;
          score?: number;
          comment?: string;
          /** @format date-time */
          createdAt?: string;
        },
        | {
            /** @example "INVALID_DATE" */
            code?: string;
            /** @example "모임이 아직 종료되지 않았습니다" */
            message?: string;
          }
        | {
            /** @example "FORBIDDEN" */
            code?: string;
            /** @example "모임에 참석하지 않았습니다" */
            message?: string;
          }
        | {
            /** @example "NOT_FOUND" */
            code?: string;
            /** @example "모임을 찾을 수 없습니다" */
            message?: string;
          }
      >({
        path: `/${teamId}/reviews`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 필터링 및 정렬 조건에 따라 리뷰 목록을 조회합니다.
     *
     * @tags Reviews
     * @name ReviewsDetail
     * @summary 리뷰 목록 조회
     * @request GET:/{teamId}/reviews
     */
    reviewsDetail: (
      teamId: string,
      query?: {
        /** 모임 ID로 필터링 */
        gatheringId?: number;
        /** 사용자 ID로 필터링 */
        userId?: number;
        /** 모임 위치로 필터링 */
        location?: '건대입구' | '을지로3가' | '신림' | '홍대입구';
        /**
         * 모임 날짜로 필터링 (YYYY-MM-DD 형식)
         * @format date
         */
        date?: string;
        /**
         * 모집 마감 날짜로 필터링 (YYYY-MM-DD 형식)
         * @format date
         */
        registrationEnd?: string;
        /** 정렬 기준 */
        sortBy?: 'createdAt' | 'score' | 'participantCount';
        /** 정렬 순서 (asc 또는 desc) */
        sortOrder?: 'asc' | 'desc';
        /** 한 번에 조회할 리뷰 수 (최소 1) */
        limit?: number;
        /** 조회 시작 위치 (최소 0) */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          teamId?: number;
          id?: number;
          score?: number;
          comment?: string;
          /** @format date-time */
          createdAt?: string;
          Gathering?: {
            teamId?: number;
            id?: number;
            type?: string;
            name?: string;
            /** @format date-time */
            dateTime?: string;
            location?: string;
            image?: string;
          };
          User?: {
            teamId?: number;
            id?: number;
            name?: string;
            image?: string;
          };
        }[],
        {
          /** @example "VALIDATION_ERROR" */
          code?: string;
          errors?: {
            parameter?: string;
            message?: string;
          }[];
        }
      >({
        path: `/${teamId}/reviews`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 필터링에 따라 리뷰 평점 목록을 조회합니다.
     *
     * @tags Reviews
     * @name ScoresDetail
     * @summary 리뷰 평점 목록 조회
     * @request GET:/{teamId}/reviews/scores
     */
    scoresDetail: (
      teamId: string,
      query?: {
        /**
         * 모임 ID의 쉼표로 구분된 목록으로 필터링
         * @pattern ^\d+(,\d+)*$
         */
        gatheringId?: string;
        /** 모임 종류로 필터링 */
        type?: 'DALLAEMFIT' | 'OFFICE_STRETCHING' | 'MINDFULNESS' | 'WORKATION';
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** 팀 ID */
          teamId?: number;
          /** 모임 ID (gatheringId 파라미터가 있을 경우에만 포함) */
          gatheringId?: number;
          /** 모임 종류 (type 파라미터가 있을 경우에만 포함) */
          type?:
            | 'DALLAEMFIT'
            | 'OFFICE_STRETCHING'
            | 'MINDFULNESS'
            | 'WORKATION';
          oneStar?: number;
          twoStars?: number;
          threeStars?: number;
          fourStars?: number;
          fiveStars?: number;
        }[],
        | {
            /** @example "VALIDATION_ERROR" */
            code?: string;
            /** @example "gatheringId" */
            parameter?: string;
            /** @example "모임 ID는 숫자의 쉼표로 구분된 목록이어야 합니다" */
            message?: string;
          }
        | {
            /** @example "VALIDATION_ERROR" */
            code?: string;
            /** @example "type" */
            parameter?: string;
            /** @example "유효한 모임 종류를 입력하세요" */
            message?: string;
          }
      >({
        path: `/${teamId}/reviews/scores`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
}
