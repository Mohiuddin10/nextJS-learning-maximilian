import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react"

async function Meals  ()  {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default async function mealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>Delicies meal created <span className={classes.highlight}>By you</span></h1>
                <p>Choose your favorite recipe and cook it by yourself. Its easy and fun!</p>
                <p>
                    <Link href="/meals/share">Share your food recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>data coming .... </p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}