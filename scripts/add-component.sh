#!/bin/bash

# 입력받은 첫 번째 인자를 component-name으로 사용
COMPONENT_NAME=$1

# shadcn/ui로 컴포넌트 생성
npx shadcn@latest add $COMPONENT_NAME

# 생성된 컴포넌트를 원하는 폴더로 이동
mv ./src/components/ui/* ./src/shared/ui/

# 기존 폴더 삭제
rm -rf ./src/components

echo "Component $COMPONENT_NAME has been added to src/shared/ui and components has been deleted."