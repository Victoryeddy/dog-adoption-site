<template>
  <div class="home">
    <section class="header">
      <div class="bg-primary hidden lg:flex">
        <div class="container mx-auto">
          <div class="grid md:grid-cols-2 gap-3 relative top-20">
            <div class="">
              <p class="text-5xl text-white font-bold mt-10">
                Find Your Furry Friend: Where Paws Meet Hearts!
              </p>
              <p class="text-white mt-6 text-xl">
                Our mission is to connect these precious pups with compassionate
                families and individuals who are ready to embrace the joy of pet
                adoption.
              </p>
              <p class="mt-12">
                <button
                  class="rounded-full bg-white py-5 px-10 drop-shdaow-lg font-medium"
                >
                  Browse
                </button>
              </p>
            </div>
            <div class="relative">
              <img src="../assets/dog-for-home-page.png" alt="" />
              <div
                class="bg-white absolute px-10 py-3 left-[14rem] bottom-8 h-20 drop-shadow-lg rounded-full"
              >
                <div class="grid grid-cols-3 gap-5">
                  <div>
                    <p class="text-center font-extrabold text-2xl">
                      {{ rescueCount }}K+
                    </p>
                    <p>Rescues</p>
                  </div>
                  <div>
                    <p class="text-center font-extrabold text-2xl">
                      {{ shelterCount }}
                    </p>

                    <p>Shelters</p>
                  </div>
                  <div>
                    <p class="text-center font-extrabold text-2xl">
                      {{ breedsCount }}K+
                    </p>

                    <p>Breeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden block bg-primary px-6">
        <div class="grid grid-cols-1 gap-1 py-3">
          <p class="text-3xl text-white font-bold mt-10">
            Find Your Furry Friend: Where Paws Meet Hearts!
          </p>
          <p class="text-white mt-6 text-xl">
            Our mission is to connect these precious pups with compassionate
            families and individuals who are ready to embrace the joy of pet
            adoption.
          </p>
          <p class="mt-12">
            <button
              class="rounded-full bg-white py-5 px-10 drop-shadow-lg font-medium"
            >
              Browse
            </button>
          </p>
        </div>
        <div class="grid grid-cols-1 gap-2 py-2 relative">
          <img src="../assets/dog-for-home-page.png" alt="" />
          <div
            class="bg-white absolute px-10 py-3 md:left-48 bottom-0 h-20 drop-shadow-lg rounded-full"
          >
            <div class="grid grid-cols-3 gap-7">
              <div>
                <p class="text-center font-extrabold text-2xl">
                  {{ rescueCount }}K+
                </p>
                <p>Rescues</p>
              </div>
              <div>
                <p class="text-center font-extrabold text-2xl">
                  {{ shelterCount }}
                </p>

                <p>Shelters</p>
              </div>
              <div>
                <p class="text-center text-2xl font-extrabold">
                  {{ breedsCount }}K+
                </p>

                <p>Breeds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/wave.svg" alt="" class="border-0" />
    </section>

    <section class="main-content outline-black">
      <div class="container mx-auto px-2">
        <h2 class="text-center font-extrabold text-4xl">
          Say Hello To Your New Family Member
        </h2>
        <p class="text-center mt-5 lg:w-3/4 mx-auto text-gray-500">
          As their warm, fuzzy paws enter your lives, you'll be enchanted by the
          unconditional love and boundless joy they offer, creating lasting
          memories and unforgettable moments. From the playful romps in the park
          to the comforting cuddles on the couch, your new canine companion will
          weave their way into your hearts, teaching valuable life lessons about
          responsibility, empathy, and compassion.
        </p>
        <p class="mt-9 mx-auto w-1/2 text-center">
          <button
            class="rounded-full bg-primary py-5 px-7 drop-shadow-lg font-medium text-white"
          >
            See all Pets
          </button>
        </p>
      </div>

      <div class="services my-32">
        <div class="container mx-auto">
          <h2 class="text-center font-extrabold text-4xl">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 px-3">
            <div class="block md:flex">
              <div class="me-5">
                <img
                  src="../assets/icons8-stethoscope-100.png"
                  alt=""
                  class="w-64"
                />
              </div>
              <div class="mb-6">
                <!-- <img src="../assets/stethoscope.svg" alt="" width="100" height="100"> -->
                <h5 class="font-medium text-2xl">Vet</h5>
                <p class="mt-2 text-gray-500">
                  We take pride in our state-of-the-art facilities and
                  cutting-edge medical technology, which allow us to diagnose
                  and treat various health conditions accurately and
                  efficiently.
                </p>
              </div>
            </div>
            <div class="block md:flex">
              <div class="me-3">
                <img
                  src="../assets/icons8-whistle-100.png"
                  alt=""
                  class="w-64"
                />
              </div>
              <div class="mb-6">
                <h5 class="font-medium text-2xl">Training</h5>
                <p class="mt-2 text-gray-500">
                  Our team of certified and experienced dog trainers is
                  committed to using positive reinforcement techniques to teach
                  your furry friend essential obedience skills and behavior
                  modification.
                </p>
              </div>
            </div>
            <div class="block md:flex">
              <div class="me-3">
                <img src="../assets/icons8-leash-100.png" alt="" class="w-64" />
              </div>
              <div>
                <h5 class="font-medium text-2xl">Walks</h5>
                <p class="mt-2 text-gray-500">
                  Whether you have a young and energetic pup or a senior dog in
                  need of a leisurely stroll, we tailor our walks to meet their
                  individual needs. When you entrust your dog to our care, you
                  can rest assured that they will be in loving hands.
                </p>
              </div>
            </div>
            <div class="block md:flex">
              <div class="me-3">
                <img
                  src="../assets/icons8-grooming-100.png"
                  alt=""
                  class="w-64"
                />
              </div>
              <div>
                <h5 class="font-medium text-2xl">Salon</h5>
                <p class="mt-2 text-gray-500">
                  Our team of experienced and gentle pet groomers is passionate
                  about providing top-notch care for all breeds and sizes.
                  Whether your dog needs a routine bath, a stylish haircut, or a
                  special spa treatment, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20 bg-gray-100 py-8">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
          <div class="flex flex-col justify-center">
            <span class="text-[#B44625]"
              ><span class="capitalize border-s-4 border-[#B44625] me-2"></span
              >Client Feedback</span
            >
            <h2 class="font-bold text-4xl mt-2 mb-3">Our Client's Review</h2>

            <p class="text-gray-500">
              Our client reviews stand as a testament to the quality and
              dedication we pour into every interaction and transaction. With a
              deep-rooted understanding of the bond between humans and dogs, we
              strive to make every experience with us not just satisfactory, but
              truly exceptional.
            </p>
          </div>
          <div>
            <div class="mt-16 overflow-x-scroll flex p-3">
              <div
                v-for="user in mergedData"
                :key="user.id"
                class="card mx-2 flex justify-between flex-col p-3"
              >
                <div>
                  <img
                    :src="user.picture"
                    alt=""
                    width="150"
                    height="150"
                    class="rounded-full shadow-sm"
                  />
                </div>
                <div class="flex items-stretch flex-col">
                  <p class="font-medium text-center mt-4">
                    {{ user.firstName }} {{ user.lastName }}
                  </p>
                  <p class="font-medium text-center mt-2">{{ user.rating }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-fixed bg-center bg-cover py-10"
      :style="`background-image: url(${require('../assets/modern.jpeg')})`"
      style="background-blend-mode: multiply; background-color: #0000006e"
    >
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 pt-20 gap-3 pb-16">
          <div class="flex justify-center">
            <img src="../assets/play-circle.svg" alt="" width="100" />
          </div>
          <div>
            <div class="flex flex-col justify-end">
              <span class="text-[#B44625] text-end"
                >Find your Dog<span
                  class="capitalize border-s-4 border-[#B44625] ms-2"
                ></span
              ></span>
              <h2 class="font-bold text-4xl mt-2 mb-3 text-white text-end">
                Dogs Are Not Our Whole Life, but They Make Our Life Whole
              </h2>
              <p class="flex justify-end mt-6">

                <button
                  class="rounded-full bg-primary py-5 px-12 drop-shadow-lg font-medium text-white  flex"
                >
                  Contact Us <img src="../assets/paw-print.svg" alt="" class="ms-2">
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-primary">
      <div class="container mx-auto px-3">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-20 gap-3 pb-16"
        >
          <div>
            <img
              src="../assets/Dog_logo.jpeg"
              alt=""
              width="100"
              height="100"
            />
            <p class="text-xl text-white font-bold mt-4">
              Find Your Furry Friend: Where Paws Meet Hearts!
            </p>
            <p class="text-white mt-2 text-md">
              Our mission is to connect these precious pups with compassionate
              families and individuals who are ready to embrace the joy of pet
              adoption.
            </p>
          </div>
          <div>
            <img
              src="../assets/Dog_logo.jpeg"
              alt=""
              width="100"
              height="100"
              class="invisible"
            />

            <p class="text-xl my-4 text-white font-bold">Our Services</p>
            <ul>
              <li class="my-3">
                <router-link to="/" class="text-white"
                  >House Sitting</router-link
                >
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white"
                  >Drop-in Visits</router-link
                >
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">Doggy Care</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">Dog Walking</router-link>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="../assets/Dog_logo.jpeg"
              alt=""
              width="100"
              height="100"
              class="invisible"
            />

            <p class="text-xl my-4 text-white font-bold">About</p>
            <ul>
              <li class="my-3">
                <router-link to="/" class="text-white">About Us</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">Our Team</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">Contact</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">shampoo</router-link>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="../assets/Dog_logo.jpeg"
              alt=""
              width="100"
              height="100"
              class="invisible"
            />

            <p class="text-xl my-4 text-white font-bold">Help</p>
            <ul>
              <li class="my-3">
                <router-link to="/" class="text-white">Booking</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">Pricing</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white">WishList</router-link>
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white"
                  >Terms of Service</router-link
                >
              </li>
              <li class="my-3">
                <router-link to="/" class="text-white"
                  >Privacy Policy</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",

  data() {
    return {
      data: [],
      currentPage: 0,
      rescueCount: 0,
      shelterCount: 0,
      breedsCount: 0,
      rescueLimit: 9,
      shelterLimit: 282,
      breedsLimit: 9,

      // usersList
      userList: [],
      mergedData: [],
      //reviews
      reviews: [
        {
          name: "Sarah Johnson",
          rating: "⭐⭐⭐⭐⭐ ",
          content:
            "I recently bought the most adorable Golden Retriever puppy from this dog shop, and I couldn't be happier! The staff was incredibly helpful and knowledgeable, guiding me through the process of choosing the perfect pup for my family.",
        },
        {
          name: "Mark Anderson",
          rating: "⭐⭐⭐⭐ ",
          content:
            "I had a pleasant experience buying a Dachshund puppy from this dog shop. The place was clean and well-maintained, and the staff seemed caring towards the dogs. ",
        },
        {
          name: "Emily Parker",
          rating: "⭐⭐⭐⭐⭐  ",
          content:
            "This dog shop is simply fantastic! I bought a Labrador puppy from them, and it was love at first sight. ",
        },
        {
          name: "Michael Ramirez",
          rating: "⭐⭐⭐⭐⭐  ",
          content:
            "I recently purchased a Siberian Husky from this dog shop, and the dog itself is absolutely stunning. However, I noticed that the shop was quite crowded, and it was challenging to get the attention of the staff. Despite this, they managed to assist me eventually.",
        },
        {
          name: "Jennifer Lee",
          rating: "⭐⭐⭐⭐  ",
          content:
            "What a wonderful dog shop! I adopted a mixed-breed rescue dog from them, and the experience was heartwarming. The staff members genuinely care for the dogs and do an amazing job matching them with the right families. My rescue pup was a bit timid at first, but with patience and love, she has become the sweetest and most loving companion. ",
        },
        {
          name: "Victory Ndu",
          rating: "⭐⭐⭐⭐⭐ ",
          content:
            "I recently purchased a Siberian Husky from this dog shop, and the dog itself is absolutely stunning. However, I noticed that the shop was quite crowded, and it was challenging to get the attention of the staff. Despite this, they managed to assist me eventually. The puppy's health and condition were good",
        },
        {
          name: "Mariam Ndu",
          rating: "⭐⭐⭐⭐ ",
          content:
            "I recently purchased a Siberian Husky from this dog shop, and the dog itself is absolutely stunning. However, I noticed that the shop was quite crowded, and it was challenging to get the attention of the staff. Despite this, they managed to assist me eventually. The puppy's health and condition were good",
        },
        {
          name: "Lee Ndu",
          rating: "⭐⭐⭐⭐ ",

          content:
            "I recently purchased a Siberian Husky from this dog shop, and the dog itself is absolutely stunning. However, I noticed that the shop was quite crowded, and it was challenging to get the attention of the staff. Despite this, they managed to assist me eventually. The puppy's health and condition were good",
        },
      ],
    };
  },

  methods: {
    getDogs() {
      // this.$http.get(`?limit=20?page=0-2`)
      this.$http
        .get(`?limit=15&page=${this.currentPage}`)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getFakeUsers() {
      this.$httpUsers
        .get(`user?&limit=5`)
        .then((response) => {
          this.userList = response.data.data;
          this.mergedData = this.userList.map((user, index) => {
            const review = this.reviews[index];

            const mergedObjects = {
              ...user,
              ...review,
            };
            return mergedObjects;
          });
          console.log(this.mergedData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    counter() {
      const startRescueCount = setInterval(
        () =>
          this.rescueCount < this.rescueLimit
            ? this.rescueCount++
            : clearInterval(startRescueCount),
        100
      );
      const startShelterCount = setInterval(
        () =>
          this.shelterCount < this.shelterLimit
            ? this.shelterCount++
            : clearInterval(startShelterCount),
        5
      );
      const startBreedsCount = setInterval(
        () =>
          this.breedsCount < this.breedsLimit
            ? this.breedsCount++
            : clearInterval(startBreedsCount),
        100
      );
    },
  },

  mounted() {
    // this.getDogs();
    // this.getFakeUsers();
    this.counter();
  },
};
</script>

<style scoped>
/* * {
  outline: 2px solid blue;
} */

.scroller {
  overflow-x: scroll;
}

.left-13 {
  left: 15rem !important;
}

/* For transition effect */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(0);
}
</style>
