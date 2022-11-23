import CreateFolder from '../builders/CreateFolder.js';

const GetValue = Phaser.Utils.Objects.GetValue;

var AddFolder = function (config) {
    var scene = this.scene;

    // Create Folder-title
    var folderStyle = GetValue(this.styles, 'folder') || {};
    folderStyle.child = this.styles;
    var folder = CreateFolder(scene, config, folderStyle);

    // Add folder
    this.add(
        folder,
        { expand: true }
    );

    // Set content
    folder.setTitle(config);

    var expanded = GetValue(config, 'expanded', true);
    if (!expanded) {
        folder.collapse(0);
    }

    return folder.getElement('child');
}

export default AddFolder;