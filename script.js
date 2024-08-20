document.addEventListener("DOMContentLoaded", function() {
    let currentSample = null;
    let sampleSelected = false;

    // Event listener for Specimen 1 button
    document.getElementById('specimen1').addEventListener('click', function() {
        currentSample = 1;
        document.getElementById('instructionText').innerText = "Specimen 1 selected. Click on the specimen to apply the reagent.";
        document.getElementById('sampleSelection').style.display = 'none';
        document.getElementById('labContent').style.display = 'block';
    });

    // Event listener for Specimen 2 button
    document.getElementById('specimen2').addEventListener('click', function() {
        currentSample = 2;
        document.getElementById('instructionText').innerText = "Specimen 2 selected. Click on the specimen to apply the reagent.";
        document.getElementById('sampleSelection').style.display = 'none';
        document.getElementById('labContent').style.display = 'block';
    });

    // Event listener for clicking on the specimen image
    document.getElementById('sampleImg').addEventListener('click', function() {
        sampleSelected = true;
        document.getElementById('instructionText').innerText = "Specimen selected. Now apply the reagent.";
        document.getElementById('applyReagentBtn').disabled = false;
    });

    // Event listener for Apply Reagent button
    document.getElementById('applyReagentBtn').addEventListener('click', function() {
        if (sampleSelected) {
            const drop = document.getElementById('reagentDrop');
            drop.style.opacity = '1';
            drop.style.animation = 'pourReagent 2s forwards';
            setTimeout(() => {
                drop.style.opacity = '0'; // Hide drop after animation
                applyReagentResult(currentSample);
            }, 2000);
        }
    });

    // Event listener for Return to Selection button
    document.getElementById('returnBtn').addEventListener('click', function() {
        resetLab();
    });

    // Function to apply the reagent and observe the result
    function applyReagentResult(sample) {
        let resultColor = document.getElementById('resultColor');
        if (sample === 1) {
            resultColor.style.backgroundColor = 'purple'; // Positive result for Specimen 1
        } else if (sample === 2) {
            resultColor.style.backgroundColor = ''; // No change for Specimen 2 (Negative result)
        }
        document.getElementById('instructionText').innerText = `Result observed for Specimen ${sample}.`;
        document.getElementById('clickInstruction').style.display = 'block';  // Show instruction to click result
        document.getElementById('returnBtn').style.display = 'block';  // Show return button
    }

    // Function to reset the lab to its initial state
    function resetLab() {
        sampleSelected = false;
        document.getElementById('applyReagentBtn').disabled = true;
        document.getElementById('sampleSelection').style.display = 'block';
        document.getElementById('labContent').style.display = 'none';
        document.getElementById('clickInstruction').style.display = 'none';  // Hide click instruction
        document.getElementById('returnBtn').style.display = 'none';  // Hide return button
        document.getElementById('resultColor').style.backgroundColor = '';  // Reset result color
        document.getElementById('instructionText').innerText = "Select a specimen to begin.";
    }

    // Microscope view functionality
    document.getElementById('resultColor').addEventListener('click', function() {
        document.getElementById('microscopeModal').style.display = "block";
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('microscopeModal').style.display = "none";
    });
});
