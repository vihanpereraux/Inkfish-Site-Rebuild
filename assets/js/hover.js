const leftItemWrappers = document.getElementsByClassName('left_item_wrapper');
const leftHgPanels = document.getElementsByClassName('left_hg_panel');

for (let index = 0; index < leftItemWrappers.length; index++) {
    leftItemWrappers[index].addEventListener('mouseover', function (event) {
        leftHgPanels[index].style.width = '50%';
        leftHgPanels[index].classList.remove('reverse_panel_1_anim');
        leftHgPanels[index].classList.add('control_panel_1_anim');
    });

    leftItemWrappers[index].addEventListener('mouseleave', function (event) {
        leftHgPanels[index].classList.remove('control_panel_1_anim');
        leftHgPanels[index].style.width = '0%';
        leftHgPanels[index].classList.add('reverse_panel_1_anim');
    });
}