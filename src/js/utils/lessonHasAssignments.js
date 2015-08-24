export default function lessonHasAssignments({lesson}) {
	return lesson.assignments && lesson.assignments.length ? true : false
}