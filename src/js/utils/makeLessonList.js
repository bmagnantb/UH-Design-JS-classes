export default function(lessonsObject) {
	var lessonsList = []
	for (var key in lessonsObject) {
		lessonsList.push({ key, lesson: lessonsObject[key] })
	}

	return lessonsList.sort((obj1, obj2) => obj1.lesson.date - obj2.lesson.date)
}