// Creo lo store con isLoading e gli array di film e serie che si riempiranno di volta in volta in base alle mie chiamate API

import { reactive } from 'vue'

export const store = reactive({
    films: [],
    series: [],
    isLoading: false
});
