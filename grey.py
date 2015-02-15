#

def to_grey(i):
    return (i / 2) ^ i

def to_bin(i):
    return '{0:b}'.format(i)

DISPLAY = oct

def grey(count):
    for i in range(count):
        # print to_bin(i), to_bin(to_grey(i))
        print '%5d -> %05o' % (i, to_grey(i))
#
