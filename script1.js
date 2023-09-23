document.addEventListener("DOMContentLoaded", function () {
    const eventCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const registrationForm = document.getElementById("eventSelectionForm");

    // Track the number of selected events
    let selectedCount = 0;

    // Function to update the selected count and disable/enable checkboxes
    function updateSelection() {
        selectedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

        // Enable all checkboxes initially
        eventCheckboxes.forEach((checkbox) => {
            checkbox.disabled = false;
        });

        // Disable unchecked checkboxes when the maximum is reached
        if (selectedCount >= 3) {
            eventCheckboxes.forEach((checkbox) => {
                if (!checkbox.checked) {
                    checkbox.disabled = true;
                }
            });
        }
    }

    // Handle checkbox click events
    eventCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateSelection);
    });

    // Handle form submission
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Check if the maximum event count is reached
        if (selectedCount <= 0) {
            alert("Please select at least one event.");
        } else if (selectedCount > 3) {
            alert("You can select a maximum of 3 events.");
        } else {
            // Proceed with form submission if validation passes
            registrationForm.submit();
        }
    });
});
