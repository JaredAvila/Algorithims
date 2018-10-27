def rotate(lst, shiftBy):
    y = shiftBy % len(lst)
    for i in range(y):
        x = lst.pop()
        lst.insert(0, x)
    return lst

z = rotate([1,2,3,4,5,6,7,8,9,10], 10000000000000000000000000000000000000000002)
q = rotate([1,2,3,4,5,6,7,8,9,10], 2)
print(z, q)
