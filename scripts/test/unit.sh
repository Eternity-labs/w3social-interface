cd ./tests/unit
# 变量声明不要有空格
check_file=`ls | grep ".spec.tsx" | tr -s "\n" " "`
echo $check_file
jest --findRelatedTests $check_file