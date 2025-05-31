import type {ThemeVariable} from "$lib/types.js";
import {hslRegex, numberRegexp} from "$lib/utils/index.js";

export const findValueType = (
    variable: string,
    value: string,
    typesMap: Record<string, ThemeVariable['type']>,
) => {
    variable = variable.replace(/--/g, '')
    const matchedVariable = typesMap[variable]
    if (matchedVariable) return matchedVariable

    if (hslRegex.test(value)) return 'color'
    if (numberRegexp.test(value)) return 'number'
}

export const mergeVariables = (defaultValues: ThemeVariable[], values: ThemeVariable[]) => {
    const variables = defaultValues.reduce((r, e) => {
        r.set(e.variable, e)
        return r
    }, new Map<string, ThemeVariable>())

    for (const value of values) {
        variables.set(value.variable, value)
    }

    return [...variables.values()]
}
