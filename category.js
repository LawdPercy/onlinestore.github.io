document.addEventListener('DOMContentLoaded', () => {
        // Function to show the selected category list and hide others
        function showGroup(groupId) {
            const groups = document.querySelectorAll('.product');
            groups.forEach(group => {
                group.style.display = 'none'; //Hide all groups
            });

            const groupToShow = document.getElementById(groupId);
            if (groupToShow) {
                groupToShow.style.display = 'flex'; // Show the selected group
            }
        }
        // Initial state: Hide all groups
        showGroup(null);

        // Attach click event listener to buttons
        document.querySelector('[onclick="showGroup(\'adhesive\')"]').addEventListener('click', () => showGroup('adhesive'));
        document.querySelector('[onclick="showGroup(\'books\')"]').addEventListener('click', () => showGroup('books'));
        document.querySelector('[onclick="showGroup(\'canteen\')"]').addEventListener('click', () => showGroup('canteen'));
        document.querySelector('[onclick="showGroup(\'clips\')"]').addEventListener('click', () => showGroup('clips'));
        document.querySelector('[onclick="showGroup(\'company\')"]').addEventListener('click', () => showGroup('company'));
        document.querySelector('[onclick="showGroup(\'computer\')"]').addEventListener('click', () => showGroup('computer'));
        document.querySelector('[onclick="showGroup(\'correction\')"]').addEventListener('click', () => showGroup('correction'));
        document.querySelector('[onclick="showGroup(\'filing\')"]').addEventListener('click', () => showGroup('filing'));
        document.querySelector('[onclick="showGroup(\'accessories\')"]').addEventListener('click', () => showGroup('accessories'));
        document.querySelector('[onclick="showGroup(\'highligters\')"]').addEventListener('click', () => showGroup('highlighters'));
        document.querySelector('[onclick="showGroup(\'labels\')"]').addEventListener('click', () => showGroup('labels'));
        document.querySelector('[onclick="showGroup(\'markers\')"]').addEventListener('click', () => showGroup('markers'));
        document.querySelector('[onclick="showGroup(\'paper\')"]').addEventListener('click', () => showGroup('paper'));
        document.querySelector('[onclick="showGroup(\'punches\')"]').addEventListener('click', () => showGroup('punches'));
        document.querySelector('[onclick="showGroup(\'Stapling\')"]').addEventListener('click', () => showGroup('stapling'));
        document.querySelector('[onclick="showGroup(\'writing\')"]').addEventListener('click', () => showGroup('writing'));
});