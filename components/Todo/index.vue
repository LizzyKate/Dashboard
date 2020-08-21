<template>
  <div>
    <div
      id="identity"
      class="lg:flex lg:flex-row lg:justify-between lg:items-start block mt-6 mb-8"
    >
      <div class="lg:w-1/3 w-full lg:-mx-5">
        <Team class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5 lg:mt-0 mt-5">
        <Todo class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5 lg:mt-0 mt-5">
        <Progress
          class="lg:px-5"
          :check="progress"
          :detail="detail"
          :topic="title"
          :action="click"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Team from './team'
import Todo from './todo'
import Progress from './progress'
export default {
  components: {
    Team,
    Todo,
    Progress,
  },
  data() {
    return {
      progress: [
        {
          font: ' text-gray-800 fab fa-bootstrap',
          title: 'Argon Design System',
          color: 'bg-warning',
          width: 'w-7/12',
        },
        {
          font: 'text-danger fab fa-angular',
          title: 'Angular Now UI Kit PRO',
          color: 'bg-success',
          width: 'w-full',
        },
        {
          font: 'text-yellow-500 fab fa-python',
          title: 'Black Dasboard',
          color: 'bg-danger',
          width: 'w-8/12',
        },
        {
          font: 'text-info fab fa-react',
          title: 'React Material Dashboard',
          color: 'bg-info',
          width: 'w-11/12',
        },
        {
          font: 'text-success fab fa-vuejs',
          title: 'Vue Paper UI Kit PRO',
          color: 'bg-success',
          width: 'w-full',
        },
      ],
      detail: '',
      title: 'Progress Track',
      click: '',
    }
  },
}
</script>
<style scoped></style>
