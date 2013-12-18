
(function() {

var Fe = function() {

};

/**
 * Create a dummy file. This file can be access via the path which combined
 * the one indicated in the optional `directory` and `name` parameters.
 *
 * For example, a file generate with such parameters:
 *
 *    var fe = new Fe();
 *    var foo = fe.file(fe.directory('/fake/tmp'), 'foo.json');
 *
 * would be indictable with the path '/fake/tmp/foo.json'.
 *
 * Note #1: any created files and directories would be registered inside the
 * `Fe` instance. For example, the `foo` described above would register
 * itself inside the `fe` instance. The return one is only for convenience.
 *
 * Note #2: the file would become a JSON file as default. If this file
 * should be read as different format, like XML or even binary, it can use
 * the `watcher` function to return the converted content.
 *
 * @param {Fe.Directory} directory - (Optional) where to put this file.
 * @param {string} name - The file name.
 * @param {object} content - (Optional) the file content.
 * @param {function(content)} watcher - When the file is accessed via fopen,
 *        this function would be called. And the final result the caller can
 *        access, is the content it return.
 * @return {Fe.File}
 * @this {Fe}
 */
Fe.prototype.file = function(directory, name, content, watcher) {

};

/**
 * Create a dummy directory.
 *
 * @param {string} path - The absolute path of this directory.
 * @param {Fe.file []} files - (Optional) files it contains.
 * @return {Fe.directory}
 * @this {Fe}
 */
Fe.prototype.directory = function() {

};

/**
 * Destroy the whole file system it created.
 *
 * Note: all references it returned, include files and directories,
 * would become invalid after this action. And access them would
 * raise exceptions.
 *
 * @this {Fe}
 */
Fe.prototype.destroy = function() {

};

module.exports = Fe;
})();
