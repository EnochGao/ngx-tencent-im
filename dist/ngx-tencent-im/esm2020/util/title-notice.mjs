export function titleNotify(count) {
    const hasNewMessage = count > 0;
    if (hasNewMessage) {
        if (document.title.search(/\((.*?)\)/) >= 0) {
            document.title = document.title.replace(/\((.*?)\)/, `(${count > 99 ? '99+' : count})`);
        }
        else {
            document.title = `(${count})${document.title}`;
        }
    }
    else {
        document.title = document.title.replace(/\((.*?)\)/, '');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtbm90aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL3V0aWwvdGl0bGUtbm90aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYTtJQUN2QyxNQUFNLGFBQWEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksYUFBYSxFQUFFO1FBQ2pCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3pGO2FBQU07WUFDTCxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoRDtLQUNGO1NBQU07UUFDTCxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMxRDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGl0bGVOb3RpZnkoY291bnQ6IG51bWJlcikge1xyXG4gIGNvbnN0IGhhc05ld01lc3NhZ2UgPSBjb3VudCA+IDA7XHJcbiAgaWYgKGhhc05ld01lc3NhZ2UpIHtcclxuICAgIGlmIChkb2N1bWVudC50aXRsZS5zZWFyY2goL1xcKCguKj8pXFwpLykgPj0gMCkge1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IGRvY3VtZW50LnRpdGxlLnJlcGxhY2UoL1xcKCguKj8pXFwpLywgYCgke2NvdW50ID4gOTkgPyAnOTkrJyA6IGNvdW50fSlgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gYCgke2NvdW50fSkke2RvY3VtZW50LnRpdGxlfWA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gZG9jdW1lbnQudGl0bGUucmVwbGFjZSgvXFwoKC4qPylcXCkvLCAnJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==