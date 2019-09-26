// 算法：递归(因为链表只有head一个入口)

struct node {
    int payload;
    node* next;
}

// 递归的核心思想是找到规律，这里规律是只关注第二个和第一个的反向链接，优先把最后执行
node* reverse(node* head) { // 链表是一个head为入口的链路
    if (head == nullptr || head->next == nullptr) {
        return head;
    }
    node* seconde = head->next;
    node* new_head = reverse(second); // 重点：不断优先整理完最后的node
    // 重构第二个与第一个的反向关系
    second->next = head;
    head->next = nullptr;

    return new_head;
}