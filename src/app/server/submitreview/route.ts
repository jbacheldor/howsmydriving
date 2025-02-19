
import { createClient } from '@/app/datastoreclient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
      const client = await createClient();
      const req = await request.json();

      const reviewData = {
            review: req.review
      }
      console.log("reviewData", reviewData)
        const { error } = await client.from('reviews').insert(reviewData);
        if (error) {
          throw new Error('could not process request', error);
        }
  
      return NextResponse.json({ message: 'success' });
    } catch (e) {
      console.log('hark an error is occurring', e);
      return NextResponse.json(
        { error: ' HARK internal server error, no!!!!', e },
        { status: 500 },
      );
    }
  }
  