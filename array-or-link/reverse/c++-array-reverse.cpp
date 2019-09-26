// c++数组reverse
// 数组reverse思路：left、right分别是两头，值互相换，然后left递增1，right递减1

//定义了一个数据类型，该数据类型的名字叫做struct Arr, 该数据类型含有三个成员，分别是pBase, len, cnt
struct Arr
{
    int * pBase; //存储的是数组第一个元素的地址
    int len; //数组所能容纳的最大元素的个数
    int cnt; //当前数组有效元素的个数
};
void reverse(struct Arr * pArr) {
    int i = 0;
    int j = pArr->cnt-1; // 末尾index
    int t;
    // 当i<j时，置换i和j位置的元素 
    while(i < j) {
        t = pArr->pBase[i];
        pArr->pBase[i] = pArr->pBase[j];
        pArr->pBase[j] = t;
        ++i;
        --j;
    }
    return;
}