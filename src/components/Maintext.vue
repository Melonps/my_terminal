<template>
    <div class="Month">{{ month }}</div>
    <div class="Day">{{ day }}</div>
    <div class="DayOfWeek">{{ dayOfWeek }}</div>
</template>

<script>
export default {
    props: ["month", "day", "dayOfWeek", "clock"]
}
</script>

<style>
    .Month{
        font-size: 4em;
    }
    .Day{
        font-size: 4em;
    }
    .DayOfWeek{
        font-size: 4em;
    }
</style>