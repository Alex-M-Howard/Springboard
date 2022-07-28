# from mondrian_art import generate
# plt = generate()
# plt.show()

from faker import Faker
fake = Faker()

for x in range(10):
    print(fake.name())