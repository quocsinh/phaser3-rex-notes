const GetValue = Phaser.Utils.Objects.GetValue;

var EaseMode = {
    to: true,
    yoyo: true
}

var IsEasePropertyTag = function (tags, prefix) {
    // sprite.name.prop.to, or sprite.name.prop.yoyo
    return (tags.length === 4) && (tags[0] === prefix) && EaseMode[tags[3]];
}

var OnParseEaseSpritePropertyTag = function (tagPlayer, parser, config) {
    var prefix = GetValue(config, 'sprite', 'sprite');
    if (!prefix) {
        return;
    }
    parser
        .on(`+`, function (tag, value, duration, ease, repeat) {
            if (parser.skipEventFlag) {  // Has been processed before
                return;
            }

            if (typeof (ease) === 'number') {
                repeat = ease;
                ease = undefined;
            }

            // [sprite.name.prop.to=value,duration]
            // [sprite.name.prop.to=value,duration,ease,repeat]
            // [sprite.name.prop.to=value,duration,repeat]
            var tags = tag.split('.');
            var name, property, isYoyo;
            if (IsEasePropertyTag(tags, prefix)) {
                name = tags[1];
                property = tags[2];
                isYoyo = (tags[3] === 'yoyo');
            } else {
                return;
            }
            tagPlayer.spriteManager.easeProperty(
                name, property, value,
                duration, ease, repeat, isYoyo
            );

            parser.skipEvent();
        })
}

export default OnParseEaseSpritePropertyTag;