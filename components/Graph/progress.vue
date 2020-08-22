<template>
  <div>
    <Info :check="progress" :detail="detail" :topic="title" :action="click" />
  </div>
</template>
<script>
import Info from '../Todo/progress'
export default {
  components: {
    Info,
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
      detail: 5 + '/' + 23 + ' PROJECTS',
      title: 'Progress track',
      click: 'Action',
    }
  },
}
</script>
<style scoped></style>
