import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mogoose';
import { Profile } from '@/models/Profile';

export async function GET() {
  try {
    await connectDB();

    // Buscar el perfil (puedes personalizar si hay más de uno)
    const profile = await Profile.findOne();

    if (!profile) {
      return NextResponse.json({ error: 'Perfil no encontrado' }, { status: 404 });
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error('[GET_PROFILE_ERROR]', error);
    return NextResponse.json(
      { error: 'Error al obtener el perfil' },
      { status: 500 }
    );
  }
}
