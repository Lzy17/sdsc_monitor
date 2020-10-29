import re
import sys
import csv

def NC(input, name):
    place = -1
    row_count = sum(1 for row in fileObject)
    with open('data.csv', newline='') as csvfile:
        content = csv.reader(csvfile)
        count = 0
        for row in content:
            if(count == 0):
                for i in range(0,len(row)):
                    if(name == name):
                        place = i



            count = count + 1




    filtered = re.sub(';','\n', input)
    filtered = re.sub('`', "", filtered)
    filtered = re.sub(' T ', "_", filtered)
    a = re.findall('(Price=\d+(.|,)\d+)',filtered)
    #if len(a) == 0:

    print('-------------------------')
    p1 = re.sub('Price=',"",a[0][0])
    p2 = re.sub('Price=',"",a[1][0])
    print(float(p1)+float(p2))
    print(p2)
    #b = re.findall('PriceUpdatedTime=/\d{4}-\d{2}-\d{2}\w\d{2}:\d{2}:\d{2}.\d{3}+\d{2}:\d{2}/', filtered)
    print(a)
#print(b)
if __name__ == "__main__":
    str = sys.argv[1]
    with open(str,'r')as f:
        NC(f.read(), str)
