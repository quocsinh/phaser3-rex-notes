import CreateImage from './CreateImage.js';
import CreateText from './CreateText.js';
import CreateRoundRectangle from './CreateRoundRectangle.js';
import CreateNinePatch from './CreateNinePatch.js';
import CreateNinePatch2 from './CreateNinePatch2.js';

import CreateSizer from './CreateSizer.js';
import CreateFixWidthSizer from './CreateFixwidthSizer.js';
import CreateGridSizer from './CreateGridSizer.js';
import CreateOverlapSizer from './CreateOverlapSizer.js';

import CreateLabel from './CreateLabel.js';
import CreateBadgeLabel from './CreateBadgeLabel.js'
import CreateDialog from './CreateDialog.js';
import CreateButtons from './CreateButtons.js';
import CreateSlider from './CreateSlider.js';

var Builders = {
    Image: CreateImage,
    Text: CreateText,
    RoundRectangle: CreateRoundRectangle,
    Ninepatch: CreateNinePatch,
    Ninepatch2: CreateNinePatch2,

    Sizer: CreateSizer,
    FixWidthSizer: CreateFixWidthSizer,
    GridSizer: CreateGridSizer,
    OverlapSizer: CreateOverlapSizer,

    Label: CreateLabel,
    BadgeLabel: CreateBadgeLabel,
    Dialog: CreateDialog,
    Buttons: CreateButtons,
    Slider: CreateSlider
};

/*
function(scene, data, styles, customBuilders) {
    return gameObject;
}
*/

export default Builders;