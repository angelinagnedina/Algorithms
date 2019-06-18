import random
list = []
for i in range(1, random.randint(1, 10)):
        list.append(i)
print(list)        
def length(list):
        if list == []:
                return 0
        else:
                del list[0]
                return 1 + length(list)
result = length(list) 
print(result)            