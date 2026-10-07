document.addEventListener('DOMContentLoaded', () => {
  // Динамична пресметка на цена за репатриране
  const distanceInput = document.getElementById('distance');
  const vehicleSelect = document.getElementById('vehicle-type');
  const priceDisplay = document.getElementById('total-price');

  function calculatePrice() {
    if (!distanceInput || !vehicleSelect || !priceDisplay) return;

    const km = parseFloat(distanceInput.value) || 0;
    const baseFee = parseFloat(vehicleSelect.value) || 50;
    const pricePerKm = 2.5;

    if (km <= 0) {
      priceDisplay.textContent = `${baseFee} лв.`;
      return;
    }

    const total = baseFee + (km * pricePerKm);
    priceDisplay.textContent = `~ ${Math.round(total)} лв.`;
  }

  if (distanceInput && vehicleSelect) {
    distanceInput.addEventListener('input', calculatePrice);
    vehicleSelect.addEventListener('change', calculatePrice);
  }
});
