#!/bin/bash

# 변경된 파일 목록 가져오기 (Playwright 테스트 파일 제외)
changed_files=$(git diff --name-only --cached | grep -v "\.spec\.ts$")

# 변경된 파일이 존재하는지 확인
if [ -n "$changed_files" ]; then
    echo "Running tests on changed files..."

    # Jest를 사용하여 변경된 파일에 대해서만 테스트 실행 (파일명에 공백이 있을 경우를 대비해)
    if ! jest --findRelatedTests $changed_files; then
        echo "Pre-push checks failed: Jest tests failed"
        exit 1
    fi
else
    echo "No relevant files changed. Skipping tests."
fi

# 모든 검사가 통과되면 성공적으로 종료
exit 0