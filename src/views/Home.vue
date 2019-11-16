<template>
  <v-layout justify-center class="home" :class="displaySP ? 'flex-column' : ''">
    <v-flex class="home-flex-min-width">
      <v-card max-width="650" class="clock pa-2 mx-auto">
        <img src="@/assets/clock_dial.svg" class="clock-face" />
        <img src="@/assets/clock_second_hand.svg" class="clock-second-hand" />
        <img src="@/assets/clock_minute_hand.svg" class="clock-minute-hand" />
        <img src="@/assets/clock_hour_hand.svg" class="clock-hour-hand" />
      </v-card>
    </v-flex>
    <v-flex>
      <v-card
        class="fill-height d-flex flex-column justify-space-around carousel"
        :class="displaySP ? 'mt-3' : 'ml-3'"
      >
        <v-card-title class="justify-center mb-5">
          What are you doing ?
        </v-card-title>
        <v-card-text>
          <img :src="thisTimeImg" class="carousel-image" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  props: { displaySP: Boolean },
  data: () => ({
    time: new Date(),
    carouselImages: {
      morning: require('@/assets/morning.svg'),
      works: require('@/assets/works.svg'),
      lunch: require('@/assets/lunch.svg'),
      goHome: require('@/assets/goHome.svg'),
      evening: require('@/assets/evening.svg'),
      night: require('@/assets/night.svg')
    }
  }),
  computed: {
    hour: function() {
      return this.time.getHours()
    },
    minute: function() {
      return this.time.getMinutes()
    },
    second: function() {
      return this.time.getSeconds()
    },
    thisTimeImg: function() {
      let src = ''
      if (6 <= this.hour && this.hour < 9) {
        src = this.carouselImages.morning
      } else if (
        (9 <= this.hour && this.hour < 12) ||
        (13 <= this.hour && this.hour < 18)
      ) {
        src = this.carouselImages.works
      } else if (12 <= this.hour && this.hour < 13) {
        src = this.carouselImages.lunch
      } else if (18 <= this.hour && this.hour < 20) {
        src = this.carouselImages.goHome
      } else if (20 <= this.hour && this.hour < 23) {
        src = this.carouselImages.evening
      } else if ((0 <= this.hour && this.hour < 6) || 23 <= this.hour) {
        src = this.carouselImages.night
      }
      return src
    }
  },
  mounted: function() {
    this.refresh()
  },
  methods: {
    clockWalk: function() {
      const clockSecondHand = document.querySelector('.clock-second-hand')
      const clockMinuteHand = document.querySelector('.clock-minute-hand')
      const clockHourHand = document.querySelector('.clock-hour-hand')
      clockSecondHand.style.transform = 'rotate(' + this.second * 6 + 'deg)'
      clockMinuteHand.style.transform = 'rotate(' + this.minute * 6 + 'deg)'
      clockHourHand.style.transform = 'rotate(' + this.hour * 30 + 'deg)'
    },
    refresh: function() {
      const self = this
      self.time = new Date()
      if (document.querySelector('.home')) {
        self.clockWalk()
        setTimeout(() => {
          self.refresh()
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
.clock-dial {
  position: relative;
  width: 100%;
}
.clock-second-hand,
.clock-minute-hand,
.clock-hour-hand {
  position: absolute;
}
.clock-second-hand {
  width: 38%;
  height: 38%;
  left: 31.3%;
  top: 15%;
  transform: rotate(0deg);
  transform-origin: 50% 90%;
}
.clock-minute-hand {
  width: 50%;
  height: 50%;
  left: 25.3%;
  top: 4%;
  transform: rotate(0deg);
  transform-origin: 50% 90%;
}
.clock-hour-hand {
  width: 38%;
  height: 38%;
  left: 31.3%;
  top: 15%;
  transform: rotate(30deg);
  transform-origin: 50% 90%;
}
.home-flex-min-width {
  min-width: 50%;
}
</style>
