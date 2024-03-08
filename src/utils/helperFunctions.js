export function findMedian(arr) {
  arr.sort((a, b) => a - b)
  const middleIndex = Math.floor(arr.length / 2)

  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2
  } else {
    return arr[middleIndex]
  }
}

export function calculateDaysActive(data) {
  return Object.values(data).reduce((acc, value) => {
    if (value !== null && value > 0) {
      return acc + 1
    }
    return acc
  }, 0)
}

export function calculateAverageTime(data) {
  const activeDates = Object.values(data).filter(value => value !== null && value > 0)
  const averagePerDay = activeDates.reduce((acc, value) => acc + value, 0) / activeDates.length
  return averagePerDay.toFixed(2)
}

export function calculateMedian(data) {
  const values = Object.values(data)
    .filter(value => value !== null && value > 0)
    .sort((a, b) => a - b)
  const length = values.length

  if (length === 0) {
    return 0 // Return 0 if there are no active values
  }

  const middleIndex = Math.floor(length / 2)

  if (length % 2 === 0) {
    // If the number of values is even, return the average of the two middle values
    return (values[middleIndex - 1] + values[middleIndex]) / 2
  } else {
    // If the number of values is odd, return the middle value
    return values[middleIndex]
  }
}
