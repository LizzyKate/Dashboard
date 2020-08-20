<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4">
        <h5 class="text-default font-semibold text-base">Team Members</h5>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div v-for="(member, i) in team" :key="i" class="p-5">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center">
            <div>
              <img
                :src="`/img/${member.image}`"
                class="rounded-full border-0 __profile"
                alt=""
              />
            </div>
            <div class="ml-4 flex flex-col">
              <div>
                <h6 class="text-gray-800 font-sm font-semibold">
                  {{ member.name }}
                </h6>
              </div>
              <div class="flex flex-row items center">
                <div class="rounded-full w-2 h-2 bg-success sucess"></div>
                <div class="ml-3">
                  <p class="font-xs text-gray-700 font-light">
                    {{ member.status }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button class="btn btn-sm btn-primary">Add</button>
          </div>
        </div>
        <div
          class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50 py-2"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          image: 'profile-small-1.jpg',
          name: 'Jhon Micheal',
          status: 'Online',
        },
        {
          image: 'profile-small-5.jpg',
          name: 'Alex Smith',
          status: 'In a meeting',
        },
        {
          image: 'profile-small-6.jpg',
          name: 'Samantha Ivy',
          status: 'Offline',
        },
        {
          image: 'profile-small-9.jpg',
          name: 'Jhon Micheal',
          status: 'Online',
        },
        {
          image: 'profile-small-15.jpg',
          name: 'Jhon Snow',
          status: 'Online',
        },
      ],
    }
  },
  computed: {
    changed() {
      return this.$store.state.nav.clicked
    },
  },
}
</script>
<style scoped>
.card-deck {
  width: 23rem;
}
.__profile {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.sucess {
  margin-top: 0.64rem;
}
@media screen and (max-width: 800px) {
  .card-deck {
    width: 100%;
  }
}
</style>
