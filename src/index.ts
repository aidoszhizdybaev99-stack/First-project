function formatLocalTime(date: Date): string {
  return date.toLocaleTimeString(undefined, { hour12: false });
}

function printTime(): void {
  // \r returns the cursor to the line start so the time updates in place
  process.stdout.write(`\r${formatLocalTime(new Date())}`);
}

printTime();
const timer = setInterval(printTime, 1000);

process.on("SIGINT", () => {
  clearInterval(timer);
  process.stdout.write("\n");
  process.exit(0);
});
