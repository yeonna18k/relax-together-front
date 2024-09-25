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

export interface UpdateUserRequest {
  companyName?: string;
  profileImage?: string;
}

export interface CreateGatheringRequest {
  /**
   * 모임 이름
   * @example "건강한 몸 만들기"
   */
  name?: string;
  /** 모임 장소 */
  location: '건대입구' | '홍대입구' | '을지로3가' | '신림';
  /**
   * 모임 이미지
   * @example "https://firebasestorage.googleapis.com/b0/b/example"
   */
  imageUrl?: string;
  /** 모임 서비스 종류 */
  type: '워케이션' | '마인드풀니스' | '오피스 스트레칭';
  /**
   * 모임 날짜 및 시간 (YYYY-MM-DDTHH:MM:SS)
   * @format date-time
   */
  dateTime?: string;
  /**
   * 모집 마감 날짜 및 시간 (선택 사항, YYYY-MM-DDTHH:MM:SS)
   * @format date-time
   */
  registrationEnd?: string;
  /**
   * 모집 정원 (최소 5명 이상)
   * @format int32
   * @min 5
   * @example 10
   */
  capacity?: number;
}

export type JoinUserRequest = object;

export interface LoginRequest {
  email: string;
  /**
   * @minLength 8
   * @maxLength 2147483647
   */
  password: string;
}

export interface EmailCheckRequest {
  email: string;
}

export interface GatheringSearchCondition {
  /** 타입 */
  type?: '달램핏' | '오피스 스트레칭' | '마인드풀니스' | '워케이션';
  /** 모임 장소 */
  location?: '건대입구' | '홍대입구' | '을지로3가' | '신림';
  /**
   * 모임 날짜 (YYYY-MM-DD)
   * @format date
   */
  date?: string;
  /**
   * 모임주최자 Id
   * @format int64
   * @example 1
   */
  hostUser?: number;
}

export interface PagedResponseSearchGatheringResponse {
  content?: SearchGatheringResponse[];
  hasNext?: boolean;
  /** @format int64 */
  totalElements?: number;
}

export interface SearchGatheringResponse {
  /** @format int64 */
  id?: number;
  type?: string;
  name?: string;
  /** @format date-time */
  dateTime?: string;
  /** @format date-time */
  registrationEnd?: string;
  location?: string;
  /** @format int64 */
  participantCount?: number;
  /** @format int32 */
  capacity?: number;
  imageUrl?: string;
  /** @format int64 */
  hostUser?: number;
}

export interface GatheringDetailResponse {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  hostUser?: number;
  name?: string;
  location?: string;
  type?: string;
  /** @format int32 */
  capacity?: number;
  imageUrl?: string;
  /** @format int64 */
  participantCount?: number;
  /** @format date-time */
  dateTime?: string;
  /** @format date-time */
  registrationEnd?: string;
  status?: string;
}

export interface Participant {
  /** @format int64 */
  userId?: number;
  name?: string;
  email?: string;
  companyName?: string;
  profileImage?: string;
  /** @format date-time */
  joinedAt?: string;
}

export interface ParticipantsResponse {
  /** @format int64 */
  gatheringId?: number;
  participants?: Participant[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int64 */
  totalElements?: number;
}

export interface HostedGatheringResponse {
  /** @format int64 */
  id?: number;
  type?: string;
  name?: string;
  /** @format date-time */
  dateTime?: string;
  /** @format date-time */
  registrationEnd?: string;
  location?: string;
  /** @format int64 */
  participantCount?: number;
  /** @format int32 */
  capacity?: number;
  imageUrl?: string;
  /** @format int64 */
  hostUser?: number;
}

export interface PagedResponseHostedGatheringResponse {
  content?: HostedGatheringResponse[];
  hasNext?: boolean;
  /** @format int64 */
  totalElements?: number;
}

export interface UserDetailsResponse {
  email?: string;
  name?: string;
  companyName?: string;
  profileImage?: string;
}

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
  public baseUrl: string = 'https://dev.relax-together.shop';
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
 * @title Relax-Together API Documentation
 * @version 1.0.0
 * @baseUrl https://dev.relax-together.shop
 *
 * Codeit 협업 2팀 Relax-Together API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description 모임을 취소합니다. 모임 생성자만 취소할 수 있습니다.
     *
     * @tags gathering-controller
     * @name CancelGathering
     * @summary 모임 취소
     * @request PUT:/api/gatherings/{gatheringId}/cancel
     * @secure
     */
    cancelGathering: (gatheringId: number, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/gatherings/${gatheringId}/cancel`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name LoginUserDetails
     * @request GET:/api/auths/me
     * @secure
     */
    loginUserDetails: (params: RequestParams = {}) =>
      this.request<UserDetailsResponse, any>({
        path: `/api/auths/me`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name Update
     * @request PUT:/api/auths/me
     * @secure
     */
    update: (data: UpdateUserRequest, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/auths/me`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 모임의 종류, 위치, 날짜 등 다양한 조건으로 모임 목록을 조회합니다.
     *
     * @tags gathering-controller
     * @name SearchGatherings
     * @summary 모임 목록 조회
     * @request GET:/api/gatherings
     * @secure
     */
    searchGatherings: (
      query: {
        condition: GatheringSearchCondition;
        /**
         * 조회 시작 위치 (최소 0)
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * 한 번에 조회할 모임 수 (최소 1)
         * @format int32
         * @default 10
         */
        size?: number;
        /**
         * 정렬할 필드를 선택하세요 [registrationEnd, participantCount]
         * @default "registrationEnd"
         */
        sortBy?: string;
        /**
         * 정렬순서를 선택하세요 [ASC, DESC]
         * @default "ASC"
         */
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedResponseSearchGatheringResponse, any>({
        path: `/api/gatherings`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 새로운 모임을 생성합니다.
     *
     * @tags gathering-controller
     * @name CreateGathering
     * @summary 모임 생성
     * @request POST:/api/gatherings
     * @secure
     */
    createGathering: (
      data: CreateGatheringRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/gatherings`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 로그인한 사용자가 모임에 참여합니다.
     *
     * @tags gathering-controller
     * @name JoinGathering
     * @summary 모임 참여
     * @request POST:/api/gatherings/{gatheringId}/join
     * @secure
     */
    joinGathering: (gatheringId: number, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/gatherings/${gatheringId}/join`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name Signup
     * @request POST:/api/auths/signup
     * @secure
     */
    signup: (data: JoinUserRequest, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/auths/signup`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name Logout
     * @request POST:/api/auths/logout
     * @secure
     */
    logout: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/auths/logout`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name Login
     * @request POST:/api/auths/login
     * @secure
     */
    login: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/auths/login`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name CheckEmail
     * @request POST:/api/auths/check-email
     * @secure
     */
    checkEmail: (data: EmailCheckRequest, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/api/auths/check-email`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 모임의 상세 정보를 조회합니다.
     *
     * @tags gathering-controller
     * @name GetGatheringDetail
     * @summary 모임 상세 조회
     * @request GET:/api/gatherings/{gatheringId}
     * @secure
     */
    getGatheringDetail: (gatheringId: number, params: RequestParams = {}) =>
      this.request<GatheringDetailResponse, any>({
        path: `/api/gatherings/${gatheringId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 특정 모임의 참가자 목록을 페이지네이션하여 조회합니다.(기본 정렬 참여 날짜 ASC)
     *
     * @tags gathering-controller
     * @name GetParticipants
     * @summary 특정 모임의 참가자 목록 조회
     * @request GET:/api/gatherings/{gatheringId}/participants
     * @secure
     */
    getParticipants: (
      gatheringId: number,
      query?: {
        /**
         * 조회 시작 위치 (최소 0)
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * 한 번에 조회할 모임 수 (최소 1)
         * @format int32
         * @default 5
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ParticipantsResponse, any>({
        path: `/api/gatherings/${gatheringId}/participants`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 내가 만든 모임 목록을 조회합니다.(정렬 모임 생성 날짜 DESC)
     *
     * @tags gathering-controller
     * @name GetMyHostedGatherings
     * @summary 내가 만든 모임 목록 조회
     * @request GET:/api/gatherings/my-hosted
     * @secure
     */
    getMyHostedGatherings: (params: RequestParams = {}) =>
      this.request<PagedResponseHostedGatheringResponse, any>({
        path: `/api/gatherings/my-hosted`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 사용자가 모임에서 참여 취소합니다. 이미 지난 모임은 참여 취소가 불가합니다.
     *
     * @tags gathering-controller
     * @name LeaveGathering
     * @summary 모임 참여 취소
     * @request DELETE:/api/gatherings/{gatheringId}/leave
     * @secure
     */
    leaveGathering: (gatheringId: number, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/gatherings/${gatheringId}/leave`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
}
