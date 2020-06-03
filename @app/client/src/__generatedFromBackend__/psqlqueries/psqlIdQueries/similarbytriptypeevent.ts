export const query = `query Similarbytriptypeevent($eventIds: Int!) {
        __typename
        similarbytriptypeevent(id: $eventIds) {
            eventIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
