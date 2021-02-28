/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* temp = head;
        ListNode* tempx = head;
        int c =0;
        while(temp != nullptr) {
            c++;
            temp = temp->next;
        }
        int x = c-n;
        
        if(c == 1){
            return nullptr;
        }
        c=0;
        head = tempx;
        
        if(x == 0) {
            ListNode* del = tempx;
            tempx = tempx->next;
            delete del;
            return tempx;
        }
      
        while(c<x && tempx != nullptr) {
            if(c == x-1) {
                ListNode* del = tempx->next;
                tempx->next = tempx->next->next;
                if(temp && temp->next != nullptr) {
                    tempx->next->next = nullptr;
                }
                delete del;
                break;
            }
            tempx = tempx->next;
            c++;
        }
        return head;
    }
};
