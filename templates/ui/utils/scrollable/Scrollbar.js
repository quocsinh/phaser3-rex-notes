import Sizer from '../../sizer/Sizer.js';
import Slider from '../../slider/Slider.js';
import TouchState from '../../touchstate/TouchState.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class Scrollbar extends Sizer {
    constructor(scene, config) {
        super(scene, config);

        var background = GetValue(config, 'background', undefined);
        // background is used in scrollbar, to cover slider and buttons
        if (background) {
            this.addBackground(background);
            delete config.background;
        }

        var buttonsConfig = GetValue(config, 'buttons', undefined);
        if (buttonsConfig) {
            delete config.buttons;
        }

        var slider = new Slider(scene, config);
        var button0 = GetValue(buttonsConfig, 'top', GetValue(buttonsConfig, 'left', undefined));
        var button1 = GetValue(buttonsConfig, 'bottom', GetValue(buttonsConfig, 'right', undefined));
        this.setScrollStep(GetValue(buttonsConfig, 'step', 0.01))

        if (button0) {
            this.add(button0);

            var touchState = new TouchState(button0);
            touchState
                .on('intouch', function () {
                    slider.value -= this.scrollStep;
                }, this)
        }

        this.add(slider,
            {
                proportion: 1
            }
        );

        if (button1) {
            this.add(button1);

            var touchState = new TouchState(button1);
            touchState
                .on('intouch', function () {
                    slider.value += this.scrollStep;
                }, this)
        }

        var buttons = [button0, button1];

        this.addChildrenMap('slider', slider);
        this.addChildrenMap('buttons', buttons);

        // Attach s buttons to slider
        slider.addChildrenMap('buttons', buttons);
    }

    setScrollStep(value) {
        this.scrollStep = value;
        return this;
    }
}

export default Scrollbar;