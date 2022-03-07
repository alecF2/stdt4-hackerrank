#include <set>

bool has_cycle(Node *head) {
  std::set<Node *> seen;
  Node *curr = head;

  while (true) {
    if (curr == NULL) {
      break;
    }
    else if (seen.count(curr) == 0) {
      seen.insert(curr);
      curr = curr->next;
    } else {
      return true;
    }
  }
  
  return false;
}