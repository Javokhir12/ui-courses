// Re-usable pieces of manifest

const manifest = {
  departments: {
    type: 'okapi',
    path: 'coursereserves/departments?limit=500',
    shouldRefresh: () => false,
  },
  coursetypes: {
    type: 'okapi',
    path: 'coursereserves/coursetypes?limit=500',
    shouldRefresh: () => false,
  },
  terms: {
    type: 'okapi',
    path: 'coursereserves/terms?limit=500',
    shouldRefresh: () => false,
  },
  locations: {
    type: 'okapi',
    path: 'locations?limit=1000&query=cql.allRecords=1 sortby name',
    shouldRefresh: () => false,
  },
  processingStatuses: {
    type: 'okapi',
    path: 'coursereserves/processingstatuses?limit=500',
    shouldRefresh: () => false,
  },
  copyrightStatuses: {
    type: 'okapi',
    path: 'coursereserves/copyrightstatuses?limit=500',
    shouldRefresh: () => false,
  },
  displaySettings: {
    type: 'okapi',
    // This path is based on the props provided to `ConfigManager` in `DisplaySettings`
    path: 'configurations/entries?query=(module=COURSES and configName=display)',
    shouldRefresh: () => false,
  }
};

export default manifest;
