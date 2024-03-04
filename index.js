// Helper function to format a date as a string in a specific format
function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Input must be a valid Date object");
    }
  
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return date.toLocaleString('en-US', options);
  }
  
  // Helper function to calculate the difference in days between two dates
  function daysDifference(startDate, endDate) {
    if (!(startDate instanceof Date) || isNaN(startDate) || !(endDate instanceof Date) || isNaN(endDate)) {
      throw new Error("Both inputs must be valid Date objects");
    }
  
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second
    const differenceInMilliseconds = endDate - startDate;
    return Math.floor(differenceInMilliseconds / millisecondsPerDay);
  }
  
  // Demo using the helper functions
  try {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    console.log("Formatted Date:", formattedDate);
  
    const futureDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // Adding 7 days to the current date
    const daysDiff = daysDifference(currentDate, futureDate);
    console.log(`Difference in Days: ${daysDiff} days`);
  } catch (error) {
    console.error("Error:", error.message);
  }
  