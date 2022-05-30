function formatInt(int) {
    return int < 10 ? `0${int}` : int;
}
export function formatDuration(duration) {
    if (duration < 60) {
        return `00:00:${formatInt(duration)}`;
    }
    if (duration < 60 * 60) {
        const min = parseInt((duration / 60).toString());
        const sec = duration - min * 60;
        return `00:${formatInt(min)}:${formatInt(sec)}`;
    }
    const hour = parseInt((duration / (60 * 60)).toString());
    const remainder = duration - hour * (60 * 60);
    const min = parseInt((remainder / 60).toString());
    const sec = remainder - min * 60;
    return `${formatInt(hour)}:${formatInt(min)}:${formatInt(sec)}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWR1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL3V0aWwvZm9ybWF0LWR1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDNUIsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDcEMsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBZ0I7SUFDN0MsSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFO1FBQ2pCLE9BQU8sU0FBUyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztLQUN2QztJQUNELElBQUksUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakQsTUFBTSxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDaEMsT0FBTyxNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUNqRDtJQUNELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekQsTUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsRCxNQUFNLEdBQUcsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNsRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZm9ybWF0SW50KGludDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIGludCA8IDEwID8gYDAke2ludH1gIDogaW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oZHVyYXRpb246IG51bWJlcikge1xyXG4gIGlmIChkdXJhdGlvbiA8IDYwKSB7XHJcbiAgICByZXR1cm4gYDAwOjAwOiR7Zm9ybWF0SW50KGR1cmF0aW9uKX1gO1xyXG4gIH1cclxuICBpZiAoZHVyYXRpb24gPCA2MCAqIDYwKSB7XHJcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludCgoZHVyYXRpb24gLyA2MCkudG9TdHJpbmcoKSk7XHJcbiAgICBjb25zdCBzZWMgPSBkdXJhdGlvbiAtIG1pbiAqIDYwO1xyXG4gICAgcmV0dXJuIGAwMDoke2Zvcm1hdEludChtaW4pfToke2Zvcm1hdEludChzZWMpfWA7XHJcbiAgfVxyXG4gIGNvbnN0IGhvdXIgPSBwYXJzZUludCgoZHVyYXRpb24gLyAoNjAgKiA2MCkpLnRvU3RyaW5nKCkpO1xyXG4gIGNvbnN0IHJlbWFpbmRlciA9IGR1cmF0aW9uIC0gaG91ciAqICg2MCAqIDYwKTtcclxuICBjb25zdCBtaW4gPSBwYXJzZUludCgocmVtYWluZGVyIC8gNjApLnRvU3RyaW5nKCkpO1xyXG4gIGNvbnN0IHNlYyA9IHJlbWFpbmRlciAtIG1pbiAqIDYwO1xyXG4gIHJldHVybiBgJHtmb3JtYXRJbnQoaG91cil9OiR7Zm9ybWF0SW50KG1pbil9OiR7Zm9ybWF0SW50KHNlYyl9YDtcclxufVxyXG4iXX0=