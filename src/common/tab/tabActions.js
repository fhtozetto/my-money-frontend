export function selectTab(tabId) {
    console.log(tabId)
    return {
        tyoe: 'TAB_SELECTED',
        payload: tabId
    }
}