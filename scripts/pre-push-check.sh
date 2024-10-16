#!/bin/bash

# 변경된 파일 목록 가져오기 (Playwright 테스트 파일 제외)
changed_files=$(git diff --name-only --cached | grep -v "\.spec\.ts$")

# 모든 테스트 파일 목록 가져오기 (현재 디렉터리에서 .spec.ts 파일들 찾기)
test_files=$(find . -name "*.spec.ts")

# 변경된 파일과 모든 테스트 파일 합치기
all_files="$changed_files $test_files"

# 변경된 파일이나 테스트 파일이 있는지 확인
if [ -n "$all_files" ]; then
    echo "Running tests on changed and all spec files..."

    # Jest를 사용하여 변경된 파일과 모든 테스트 파일에 대해서 테스트 실행
    if ! jest --findRelatedTests $all_files; then
        echo "Pre-push checks failed: Jest tests failed"
        exit 1
    fi
else
    echo "No relevant files or test files found. Skipping tests."
fi

# 모든 검사가 통과되면 성공적으로 종료
exit 0