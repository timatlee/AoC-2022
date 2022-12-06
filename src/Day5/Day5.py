import os

if __name__ == '__main__':
    with open(os.path.dirname(os.path.realpath(__file__)) + "\\" + "demo.txt") as file:
        datas = cleaning = [i for i in file.read().strip()]

        print(datas)
