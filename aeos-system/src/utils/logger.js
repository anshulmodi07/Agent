export function logStep(step) {
  console.log("\n===== AUDIT LOG =====");
  console.log(JSON.stringify(step, null, 2));
}