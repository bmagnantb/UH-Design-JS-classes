export default function lessonHasSlides({lesson}) {
	return lesson.slides ? lesson.slides.length : false
}