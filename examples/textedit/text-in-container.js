import phaser from 'phaser/src/phaser.js';
import BBCodeTextPlugin from '../../plugins/bbcodetext-plugin.js';
import TextEditPlugin from '../../plugins/textedit-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var printText = this.add.rexBBCodeText(0, 0, 'abc', {
            color: 'yellow',
            fontSize: '24px',
            fixedWidth: 200,
            fixedHeight: 80,
            backgroundColor: '#333333',
            valign: 'center'
        })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', function () {
                var config = {
                    onOpen: function (textObject) {
                        console.log('Open text editor');
                    },
                    onTextChanged: function (textObject, text) {
                        textObject.text = text;
                        console.log(`Text: ${text}`);
                    },
                    onClose: function (textObject) {
                        console.log('Close text editor');
                    },
                    selectAll: true,
                    // enterClose: false
                }
                this.plugins.get('rexTextEdit').edit(printText, config);
            }, this);


        this.add.container(400, 300, [printText]);
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true
    },
    scene: Demo,
    plugins: {
        global: [
            {
                key: 'BBCodeTextPlugin',
                plugin: BBCodeTextPlugin,
                start: true
            },
            {
                key: 'rexTextEdit',
                plugin: TextEditPlugin,
                start: true
            }
        ]
    }
};

var game = new Phaser.Game(config);