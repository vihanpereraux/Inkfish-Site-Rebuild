const leftItemWrappers = document.getElementsByClassName('left_item_wrapper');
const leftHgPanels = document.getElementsByClassName('left_hg_panel');

const leftHgSplitPanelSet_1 = document.getElementsByClassName('left_hg_s_panel_set_1');

for (let index = 0; index < leftItemWrappers.length; index++) {
    leftItemWrappers[index].addEventListener('mouseover', function (event) {
        leftHgPanels[index].style.width = '97%';
        leftHgPanels[index].classList.remove('reverse_panel_1_anim');
        leftHgPanels[index].classList.add('control_panel_1_anim');

        switch (index + 1) {
            case 1:
                for (let index = 0; index < leftHgSplitPanelSet_1.length; index++) {
                    switch (index + 1) {
                        case 1:
                            leftHgSplitPanelSet_1[index].classList.remove('reverse_animate_block_one');
                            leftHgSplitPanelSet_1[index].style.width = '80%';
                            leftHgSplitPanelSet_1[index].classList.add('animate_block_one');
                            break;

                        default:
                            break;
                    }
                }
                break;

            default:
                break;
        }
    });

    leftItemWrappers[index].addEventListener('mouseleave', function (event) {
        leftHgPanels[index].classList.remove('control_panel_1_anim');
        leftHgPanels[index].style.width = '0%';
        leftHgPanels[index].classList.add('reverse_panel_1_anim');

        switch (index + 1) {
            case 1:
                for (let index = 0; index < leftHgSplitPanelSet_1.length; index++) {
                    switch (index + 1) {
                        case 1:
                            leftHgSplitPanelSet_1[index].classList.remove('animate_block_one');
                            leftHgSplitPanelSet_1[index].style.width = '0%';
                            leftHgSplitPanelSet_1[index].classList.add('reverse_animate_block_one');
                            break;

                        default:
                            break;
                    }
                }
                break;

            default:
                break;
        }
    });
}