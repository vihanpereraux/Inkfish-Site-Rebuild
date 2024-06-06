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
                            dumyFuncOne('reverse_animate_block_one', '80%', 'animate_block_one', index);
                            break;

                        case 2:
                            dumyFuncOne('reverse_animate_block_two', '80%', 'animate_block_two', index);
                            break;

                        case 3:
                            dumyFuncOne('reverse_animate_block_three', '70%', 'animate_block_three', index);
                            break;

                        case 4:
                            dumyFuncOne('reverse_animate_block_four', '60%', 'animate_block_four', index);
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
                            dumyFunc('animate_block_one', 'reverse_animate_block_one', index);
                            break;

                        case 2:
                            dumyFunc('animate_block_two', 'reverse_animate_block_two', index);
                            break;

                        case 3:
                            dumyFunc('animate_block_three', 'reverse_animate_block_three', index);
                            break;

                        case 4:
                            dumyFunc('animate_block_four', 'reverse_animate_block_four', index);
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


function dumyFunc(animationNameOne, animationNameTwo, index) {
    leftHgSplitPanelSet_1[index].classList.remove(animationNameOne);
    leftHgSplitPanelSet_1[index].style.width = '0%';
    leftHgSplitPanelSet_1[index].classList.add(animationNameTwo);
}

function dumyFuncOne(animationNameOne, width, animationNameTwo, index) {
    leftHgSplitPanelSet_1[index].classList.remove(animationNameOne);
    leftHgSplitPanelSet_1[index].style.width = width;
    leftHgSplitPanelSet_1[index].classList.add(animationNameTwo);
}