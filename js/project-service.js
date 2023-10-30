
// JavaScript source code
var STORAGE_KEY = 'gProjects'
const PAGE_SIZE = 10;
var gPageIdx = 0;

_createProjects();

function getLabels(labels) {
    console.log('labels', labels)
    var strHTML = labels.map(function mapLabels(currentLabel, index, array) {
        return `<span>${currentLabel}</span>`;
    })
   console.log('labels strHTM', strHTML);
    return strHTML;
}


function getProjectId(projectId) {
    var projectIndex = gProjects.findIndex(function (project) {
        return projectId === project.id
    })
    return projectIndex
}

function getProjects() {
    var fromIdx = gPageIdx * PAGE_SIZE;
    return gProjects.slice(fromIdx, fromIdx + PAGE_SIZE)
}

function _createProject(id, name, title, desc, url, publishAt, labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishAt,
        labels: labels,
    }
}

function _createProjects() {
    var projects = loadFromStorage(STORAGE_KEY)
    if (!projects || !projects.length) {
        projects = []
        gProjects = projects;
    }
}

function _saveProjectsToStorage() { 
    saveToStorage(STORAGE_KEY, gBooks)
}
