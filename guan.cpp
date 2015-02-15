#include <stdio.h>

#define radix 4
#define digits 3

// Slight cleanup of
// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.119.1344&rep=rep1&type=pdf

int main()
{
    int code[digits + 1]; /* the Gray code */
    int direction[digits + 1]; /* +1 or −1 */

    for (int i = 0; i < digits; i++) {
        code[i] = 0;
        direction[i] = 1;
    }

    while (true) {
        printf("(");
        for (int j = digits - 1; j >= 0; j--)
            printf (" %d", code[j]);
        printf (")\n");

        bool found = false;
        for (int i = 0; !found && i < digits; ++i) {
            int next = code[i] + direction[i];
            found = (next < radix && next >= 0);
            if (found)
                code[i] = next;
            else
                direction[i] *= -1;
        }
        if (!found)
            break;
    }
}
