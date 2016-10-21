
function getCurrentVersion() {
    var kf_release = "6.0.0";

    return kf_release;
}

function currentReleasePath(elem, path) {
    elem.href="releases/" + getCurrentVersion() + path;
}

function currentReleaseAbsPath(elem, path) {
    elem.href="/releases/" + getCurrentVersion() + path;
}
